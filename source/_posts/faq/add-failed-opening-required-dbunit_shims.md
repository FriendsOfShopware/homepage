---
title: Failed opening required "dbunit_shims.php"
tags: ["Errors"]
date: 2018-03-02T14:20:00+01:00
categories: FAQ
---

If this error message occurs
```
PHP Fatal error: require(): Failed opening required '/var/www/vendor/composer/../../tests/dbunit_shims.php'
```

you have to run composer without dev mode like that: `composer install -o --no-dev`
