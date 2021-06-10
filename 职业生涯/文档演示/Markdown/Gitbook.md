```.
├── book.json
├── README.md
├── SUMMARY.md
├── chapter-1/
|   ├── README.md
|   └── something.md
└── chapter-2/
    ├── README.md
    └── something.md
```

### Project integration with subdirectory {#subdirectory}

```.
├── book.json
└── docs/
    ├── README.md
    └── SUMMARY.md
```

With `book.json` containing:

```
{
    "root": "./docs"
}
```
