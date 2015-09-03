```javascript
var number = require('agreement-schedules-exhibits-numbering')
```

The package is a numbering scheme as described by [abstract-numbering](https://www.npmjs.com/package/abstract-numbering).

# The Agreement

The first child form is the agreement:

```javascript
var assert = require('assert')
assert.equal(
  number(
    [ { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } } ],
    true),
  'Agreement.')

assert.equal(
  number(
    [ { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } } ],
    false),
  'the Agreement')
```

Children of the agreement are numbered by [outline-numbering][outline-numbering]:

```javascript
assert.equal(
  number(
    [ { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } },
      { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } } ]),
  'Section 1 of the Agreement')

assert.equal(
  number(
    [ { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } },
      { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } },
      { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } } ]),
  'Section 1(a) of the Agreement')

assert.equal(
  number(
    [ { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } },
      { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } } ],
    true),
  '1.')
```

# Schedules

The second child form contains schedules to the agreement:

```javascript
assert.equal(
  number(
    [ { series:  { number: 1, of: 1 },
        element: { number: 2, of: 2 } } ],
    true),
  'Schedules.')

assert.equal(
  number(
    [ { series:  { number: 1, of: 1 },
        element: { number: 2, of: 2 } } ],
    false),
  'Schedules to the Agreement')
```

Each of its children is a schedule:

```javascript
assert.equal(
  number(
    [ { series:  { number: 1, of: 1 },
        element: { number: 2, of: 2 } },
      { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } } ],
    true),
  'Schedule 1.')
```

The children of each schedule are numbered by [outline-numbering][outline-numbering] as well:

```javascript
assert.equal(
  number(
    [ { series:  { number: 1, of: 1 },
        element: { number: 2, of: 2 } },
      { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } },
      { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } } ],
    false),
  'Section 1 of Schedule 1')
```

# Exhibits

Any other child form is an exhibit:

```javascript
assert.equal(
  number(
    [ { series:  { number: 1, of: 1 },
        element: { number: 3, of: 3 } } ],
    true),
  'Exhibit 1.')

assert.equal(
  number(
    [ { series:  { number: 11, of: 11 },
        element: { number: 13, of: 13 } } ],
    true),
  'Exhibit K-11.')

assert.equal(
  number(
    [ { series:  { number: 1, of: 1 },
        element: { number: 3, of: 3 } } ],
    false),
  'Exhibit 1')
```

The children of each exhibit are numbered by [outline-numbering][outline-numbering]:

```javascript
assert.equal(
  number(
    [ { series:  { number: 1, of: 1 },
        element: { number: 3, of: 3 } },
      { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } } ],
    false),
  'Section 1 of Exhibit 1')

assert.equal(
  number(
    [ { series:  { number: 1, of: 1 },
        element: { number: 3, of: 3 } },
      { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } } ],
    true),
  '1.')
```

[outline-numbering]: https://npmjs.com/packages/outline-numbering
