---
title: Column not found 1054 Unknown column 'b.id' in 'where clause' in product exports
tags: ["Bugs"]
date: 2018-03-20T19:28:14+01:00
categories: FAQ
---

If a cart attribute is used in the dispatch calculation, it will throw a error in product exports. You can fix that with this patch: https://github.com/shopware/shopware/pull/1574
