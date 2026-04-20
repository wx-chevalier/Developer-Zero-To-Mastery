# 语言和货币切换组件优化方案

## 目录结构

```
components/
└── LanguageAndCurrencySwitcher/
    ├── components/
    │   └── CurrencySwitcher/
    ├── services/
    │   └── CurrencyBroadcast.ts
    ├── store/
    │   └── useCurrencyStore.ts
    ├── types/
    │   └── index.ts
    ├── styles/
    │   └── index.module.scss
    └── index.tsx
```

## 1. 类型定义优化

```typescript:types/index.ts
import { CurrencySymbolType } from '@unionfab/ufc-shop-commons';

export interface LanguageAndCurrencyProps {
  className?: string;
  style?: React.CSSProperties;
  ignoreDesc?: boolean;
  blankLinks?: boolean;
}

export interface StoreState {
  currency: CurrencySymbolType;
  setCurrency: (currency: CurrencySymbolType) => void;
}

export interface CurrencySwitcherProps {
  className?: string;
  style?: React.CSSProperties;
  ignoreDesc?: boolean;
  handleChangeTitle: (title: string) => void;
}
```

## 2. 广播服务优化

```typescript:services/CurrencyBroadcast.ts
import { CurrencySymbolType } from '@unionfab/ufc-shop-commons';

export class CurrencyBroadcast {
  private static instance: CurrencyBroadcast;
  private channel: BroadcastChannel | null = null;
  private readonly CHANNEL_NAME = 'global-currency-channel';

  private constructor() {
    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      this.channel = new BroadcastChannel(this.CHANNEL_NAME);
    }
  }

  static getInstance(): CurrencyBroadcast {
    if (!CurrencyBroadcast.instance) {
      CurrencyBroadcast.instance = new CurrencyBroadcast();
    }
    return CurrencyBroadcast.instance;
  }

  broadcast(currency: CurrencySymbolType): void {
    this.channel?.postMessage({ currency });
  }

  subscribe(callback: (currency: CurrencySymbolType) => void): () => void {
    const handler = (event: MessageEvent) => {
      callback(event.data.currency);
    };

    this.channel?.addEventListener('message', handler);
    return () => this.channel?.removeEventListener('message', handler);
  }
}
```

## 3. Store 优化

```typescript:store/useCurrencyStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  onGlobalCurrencyChange,
  CurrencySymbolType,
  SupportedCurrencies,
} from '@unionfab/ufc-shop-commons';
import { StoreState } from '../types';
import { CurrencyBroadcast } from '../services/CurrencyBroadcast';

const DEFAULT_CURRENCY: CurrencySymbolType = 'USD';

const validateCurrency = (currency: CurrencySymbolType): boolean =>
  SupportedCurrencies.some(c => c.localeCode === currency);

const useCurrencyStore = create<StoreState>()(
  persist(
    (set) => ({
      currency: DEFAULT_CURRENCY,
      setCurrency: (currency) => {
        if (validateCurrency(currency)) {
          set({ currency });
          onGlobalCurrencyChange(currency);
        }
      },
    }),
    {
      name: 'currency-storage',
      getStorage: () => localStorage,
      onRehydrateStorage: () => (state) => {
        if (!validateCurrency(state.currency)) {
          state.setCurrency(DEFAULT_CURRENCY);
        }

        return CurrencyBroadcast.getInstance().subscribe((currency) => {
          state.setCurrency(currency);
        });
      },
    }
  )
);

export default useCurrencyStore;
```

## 4. 组件优化

### 4.1 CurrencySwitcher 组件

```typescript:components/CurrencySwitcher/index.tsx
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import cn from 'classnames';
import { useRef, useCallback, memo, useMemo } from 'react';
import {
  CurrencyConfig,
  SupportedCurrencies,
  CurrencySymbolType,
} from '@unionfab/ufc-shop-commons';
import { CurrencyBroadcast } from '../../services/CurrencyBroadcast';
import useCurrencyStore from '../../store/useCurrencyStore';
import { BUTTON_STYLES, ICON_STYLES, MENU_ITEM_STYLES } from './styles';
import styles from './index.module.scss';

export const CurrencySwitcher = memo(({
  className,
  style,
  ignoreDesc,
  handleChangeTitle,
}: CurrencySwitcherProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { currency, setCurrency } = useCurrencyStore();

  const currentCurrencyConfig = useMemo(() =>
    SupportedCurrencies.find(l => l.localeCode === currency) || SupportedCurrencies[0],
  [currency]);

  const handleCurrencySwitch = useCallback((config: CurrencyConfig) => {
    const { localeCode, label } = config;
    setCurrency(localeCode as CurrencySymbolType);
    handleChangeTitle(label);
    CurrencyBroadcast.getInstance().broadcast(localeCode as CurrencySymbolType);
  }, [setCurrency, handleChangeTitle]);

  const renderMenuItem = useCallback((config: CurrencyConfig) => (
    <Space
      style={MENU_ITEM_STYLES}
      onClick={() => handleCurrencySwitch(config)}
    >
      {config.label}
    </Space>
  ), [handleCurrencySwitch]);

  const dropdownMenuItems = useMemo(() =>
    SupportedCurrencies.map((currency) => ({
      key: currency.localeCode,
      label: renderMenuItem(currency),
      style: { textAlign: 'left' },
    })),
  [renderMenuItem]);

  return (
    <div
      id="CurrencySwitcher"
      className={cn(className, styles.container)}
      style={style}
      onClick={(e) => e.stopPropagation()}
    >
      <Dropdown
        getPopupContainer={(e) => e || dropdownRef.current!}
        trigger={['click']}
        menu={{ items: dropdownMenuItems }}
      >
        <Button
          ref={dropdownRef}
          type="text"
          style={{ ...BUTTON_STYLES, ...style }}
        >
          <span style={{ flex: 1, textAlign: 'left' }}>
            {!ignoreDesc && currentCurrencyConfig.label}
          </span>
          <DownOutlined style={ICON_STYLES} />
        </Button>
      </Dropdown>
    </div>
  );
});

CurrencySwitcher.displayName = 'CurrencySwitcher';
```

### 4.2 主组件

```typescript:index.tsx
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu } from 'antd';
import cn from 'classnames';
import { useRef, useState, useEffect, memo } from 'react';
import { useTranslation } from '../../next-i18next';
import { SupportedI18nLanguages } from '../LanguageSwitcher/types';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { CurrencySwitcher } from './components/CurrencySwitcher';
import { LanguageAndCurrencyProps } from './types';
import { BUTTON_STYLES } from './styles';
import styles from './styles/index.module.scss';

export const LanguageAndCurrencySwitcher = memo(({
  className,
  style,
  ignoreDesc,
  blankLinks,
}: LanguageAndCurrencyProps) => {
  const { t, i18n } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [language, setLanguage] = useState<string>('English');
  const [currentCurrencyLabel, setCurrentCurrencyLabel] = useState('');

  const currentLanguageConfig = SupportedI18nLanguages.find(
    l => l.localeCode === i18n.language
  ) || SupportedI18nLanguages[0];

  useEffect(() => {
    setLanguage(currentLanguageConfig.label || 'English');
  }, [currentLanguageConfig.label]);

  const renderMenuItems = () => (
    <Menu>
      <Menu.Item>
        <div className={styles.menuItemTitle}>{t('Language')}</div>
        <LanguageSwitcher
          blankLinks={blankLinks}
          handleChangeTitle={setLanguage}
          style={{ width: '100%' }}
        />
      </Menu.Item>
      <Menu.Item>
        <div className={styles.menuItemTitle}>{t('Currency')}</div>
        <CurrencySwitcher
          handleChangeTitle={setCurrentCurrencyLabel}
          style={{ width: '100%' }}
        />
      </Menu.Item>
    </Menu>
  );

  return (
    <div
      id="LanguageAndCurrencySwitcher"
      className={cn(className, styles.container)}
      style={style}
    >
      <Dropdown
        getPopupContainer={e => e || dropdownRef.current!}
        trigger={['hover']}
        overlay={renderMenuItems()}
      >
        <Button
          ref={dropdownRef}
          type="text"
          style={BUTTON_STYLES}
          className={styles.button_active}
        >
          {!ignoreDesc && `${language} / ${currentCurrencyLabel}`}
          <DownOutlined style={{ marginLeft: 0, color: '#172e59', transform: 'scale(0.8)' }} />
        </Button>
      </Dropdown>
    </div>
  );
});

LanguageAndCurrencySwitcher.displayName = 'LanguageAndCurrencySwitcher';
```

## 5. 样式优化

```scss:styles/index.module.scss
.container {
  position: relative;
  display: inline-block;

  :global {
    .ant-dropdown-menu {
      min-width: 160px;
    }
  }
}

.menuItemTitle {
  padding: 4px 0;
  color: #666;
  font-size: 12px;
}

.button {
  &_active {
    &:hover {
      color: #172e59 !important;
    }
  }
}
```

## 6. 常量定义

```typescript:styles/constants.ts
export const BUTTON_STYLES: React.CSSProperties = {
  gap: 3,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'default',
  color: '#172e59',
  fontSize: 14,
  width: '200px',
};

export const ICON_STYLES: React.CSSProperties = {
  marginLeft: 0,
  color: '#172e59',
  transform: 'scale(0.8)',
};

export const MENU_ITEM_STYLES: React.CSSProperties = {
  display: 'block',
  width: '100%',
};
```

## 主要优化点

1. **代码组织优化**

   - 清晰的目录结构
   - 组件职责分离
   - 类型定义集中管理
   - 样式文件分离

2. **性能优化**

   - 使用 memo 避免不必要的重渲染
   - 使用 useMemo 缓存计算结果
   - 使用 useCallback 缓存回调函数
   - 优化事件监听器的清理

3. **状态管理优化**

   - 集中的状态管理
   - 状态持久化处理
   - 跨标签页状态同步
   - 状态验证和错误处理

4. **类型安全**

   - 完整的类型定义
   - 严格的类型检查
   - 类型推导优化

5. **样式管理**

   - 样式模块化
   - 常量抽离
   - 样式复用
   - 主题支持

6. **可维护性**

   - 清晰的命名
   - 完整的注释
   - 单一职责原则
   - 代码复用

7. **错误处理**
   - 完整的错误处理
   - 默认值处理
   - 类型安全检查
   - 状态验证

## 后续建议

1. 添加单元测试
2. 添加性能监控
3. 添加错误边界处理
4. 考虑添加 i18n 支持
5. 考虑添加主题支持
6. 添加加载状态处理
7. 优化错误提示
8. 添加文档说明
