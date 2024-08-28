# [On Writing Well](https://zodvik.com/posts/on-writing-well/)

Writing a technical document is surprisingly hard. That is not because of the skill to tell a story. It’s because writing forces a level of clarity that is easy to gloss over while thinking through a topic.

Folks who take interviews for engineers will relate to this. The candidate talks through a solution. You can tell their approach doesn’t work but the candidate doesn’t see it. When you ask them to write the code, it helps them understand that what they thought doesn’t pan out.

The rest of the document is my collection of tips to write well. These are not mutually exclusive.

1. Write for your audience
2. Write simply
3. Remove weasel words
4. Apply the “So what? test
5. Add a structure
6. Be persuasive
7. Non-obsolete writing.

These don’t make the writing brilliant by any measure, but simply avoid the common pitfalls.

## Write for your audience

Ask the below two questions before writing. Your document structure, degree of details, words you use can change depending on your audience.

1. Who am I writing this for?
2. What are the top 1-3 takeaways after someone’s read.

Once you’re done, read the document from your audience’s perspective and understand if the ideas come through.

Let’s say you’re writing about updates & work done post an outage. What you write will vary depending on if the audience is your own team vs all of engineering vs an update for executives

|            | What to focus on                                                                                                                                       | What not to include                                                            |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| Team       | How did we discover the issue? Granular details of system characteristics during the outage Granular details on specific set of changes done Learnings | Things that folks on team will already know list of services what do they do … |
| Executives | Impact in terms of customer experience Monetary impact Likelihood of repetition                                                                        | Architecture diagram, call graphs, etc. Jargons                                |

## Write simply

**Use fewer than 30 words per sentence**
Longer sentences tend to increase cognitive load. Above a certain point, you forget how a sentence started by the time you came to the end of it.

**Use ordinary words and simple sentences**
Lot of your readers may not have English as their first language. They would’ve sufficient technical understanding to get the ideas, but fancy writing get in their way.

**Remove fluff**
If you remove a phrase or a statement from a document and the meaning still remains clear, remove it.

**Avoid jargon or acronyms**
Do not use terms that the audience may not be familiar with. If you necessarily have to, then explain those terms along with their usage.

| Before                                                                                                                                                                                                                                                                                                                     | After                                                                                                                                           |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| As our company starts to diversify itself into more and more businesses in the transactional & financial services ecosystem, it has become imperative that we build a host of central capabilities which can be used as a repository of solutions which can be redeployed and reused primarily in a business agnostic way. | As our company expands into more financial services, it needs to create reusable solutions that can be applied across different business areas. |
| Given how we would often end up being the conduit point for a host of future building efforts for a lot of the CXOs, we may often end up in resource constrained zones and will end up in one of the following 2 scenarios.                                                                                                | As we become a key resource for many CxO’s future projects, we may face resource limitations, leading to one of two situations:                 |

## Remove weasel words

Replace adjectives with data or details. Whenever possible, add a link to the data along with it.

Adjectives often mask relevant details that then require more back and forth to get to the same shared understanding.

| Before                                                                                                                                                                | After                                                                                                                                                             |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| We had a **great** quarter                                                                                                                                            | Our profitability went up by 15% this quarter to 115M.                                                                                                            |
| We **often** had this bug and it impacted **many** clients. It’s **urgent** to fix it.                                                                                | We had this bug 3 times in July 2020 it impacted 301 users across 12 companies.                                                                                   |
| Our DB size increased unexpectedly and is huge now                                                                                                                    | Our DB size increased 2x in the last 3 months, instead of the usual 1.2x.                                                                                         |
| **All** the customers were impacted by a **major issue**, during this event. We lost **a lot of** money. Hopefully, we fixed the **main** problem **really quickly**. | 10,400 customers couldn’t complete a purchase for 2h13m, due to a server failure introduced by a code change, resulting in an estimated loss of $50 000 (+/- 4%). |

## Apply the “So what?” test

Ask the “So what” question to every sentence that you write.

For example, if you say “We built a new platform to run load tests". So what? How does it help me? Instead, we can

| Before                                    | After                                                                                                                          |
| :---------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| We built a new platform to run load tests | We built a new load test platform that let’s anyone run load tests on demand reducing the time to set up from a day to 15 mins |

The “So what” test can also lead to completely deleting sentences that don’t add any value to the document. It also forces us to quantify the impact in our narrative.

## Add a structure

Structure in a document helps tell a story. A popular structure is **SCR**

- Situation - frame the context
- Complication - why the situation requires action
- Resolution - the action to be taken

More often than not, this can be templatized, like we do for PRDs, Architecture & Design documents, RCAs, etc.

Two other common sections include

- Asks — If you have asks that you want your audience to approve or provide feedback on then just create a section called “Asks” and make your asks clear in plain English
- Appendix — Anyone who is interested to look at the details can refer to the appendix section but for everyone else they stay on the crux of the document and don’t get distracted by too many details. This also serves the section to post references for data shared through the document.

## Be persuasive

**Prefer active voice to passive**.
Active voice tends to be concise and clearly identifies who performed the action.

| Before                                                                                     | After                                                                |
| :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------- |
| The data center’s efficiency was improved by 15% when a new cooling system was implemented | The new cooling system improved the data center’s efficiency by 15%. |

**Don’t ask for permission.**
For systems under your control, frame your writing as “we will do X” rather than “we would like to do X”. This sounds more confident and surfaces alternative views faster. The latter is also ambiguous if the action will be taken or not.

## Non-obsolete writing

Most docs are short-lived and used for point-in-time discussions. However, there are documents that serve for a longer time. To have your writing stand the test of time, avoid using references that change with time or location.

**Examples**

- Use absolute time units (Aug 28, 2024) instead of relative (in the next 2 weeks)
- Do not write “the new office”, instead name the office.
- Degree for a temperature unit will be interpreted as Celsius in India but Fahrenheit in the US.

In addition, add a section at the top of every document that covers who wrote it, when it was written and who approved it (if required). This helps provides necessary context to the reader on how to interpret the rest of the document.

## Appendix

- https://www.paulgraham.com/simply.html
- https://x.com/destraynor/status/1258372157706510336?lang=en
- https://aws.amazon.com/builders-library/using-load-shedding-to-avoid-overload/
