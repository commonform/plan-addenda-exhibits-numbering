# plan-addenda-exhibits-numbering

number plans with addenda and exhibits

This package is part of the [abstract-numbering](https://www.npmjs.com/search?q=keywords:abstract-numbering) family of packages.

```javascript
var pae = require('plan-addenda-exhibits-numbering')
```

The package is a numbering scheme as described by [abstract-numbering](https://www.npmjs.com/package/abstract-numbering).

# The Plan

The first child form is the agreement:

```javascript
var assert = require('assert')
assert.deepStrictEqual(
  pae(
    [
      {
        series: { number: 1, of: 5 },
        element: { number: 1, of: 4 }
      }
    ],
    true
  ),
  'Plan.'
)

assert.deepStrictEqual(
  pae(
    [
      {
        series: { number: 1, of: 1 },
        element: { number: 1, of: 1 }
      }
    ],
    false
  ),
  'the Plan'
)
```

Children of the agreement are numbered by [outline-numbering][outline-numbering]:

```javascript
assert.deepStrictEqual(
  pae(
    [
      {
        series: { number: 1, of: 1 },
        element: { number: 1, of: 1 }
      },
      {
        series: { number: 1, of: 1 },
        element: { number: 1, of: 1 }
      }
    ]
  ),
  'Section 1 of the Plan'
)

assert.deepStrictEqual(
  pae(
    [
      {
        series: { number: 1, of: 1 },
        element: { number: 1, of: 1 }
      },
      {
        series: { number: 1, of: 1 },
        element: { number: 1, of: 1 }
      },
      {
        series: { number: 1, of: 1 },
        element: { number: 1, of: 1 }
      }
    ]
  ),
  'Section 1(a) of the Plan'
)

assert.deepStrictEqual(
  pae(
    [
      {
        series: { number: 1, of: 1 },
        element: { number: 1, of: 1 }
      },
      {
        series: { number: 1, of: 1 },
        element: { number: 1, of: 1 }
      }
    ],
    true
  ),
  '1.'
)
```

# Addenda

The second child form contains schedules to the agreement:

```javascript
assert.deepStrictEqual(
  pae(
    [
      {
        series: { number: 1, of: 5 },
        element: { number: 2, of: 2 }
      }
    ],
    true
  ),
  'Addenda.'
)

assert.deepStrictEqual(
  pae(
    [
      {
        series: { number: 1, of: 1 },
        element: { number: 2, of: 2 }
      }
    ],
    false
  ),
  'Addenda to the Plan'
)
```

Each of its children is a schedule:

```javascript
assert.deepStrictEqual(
  pae(
    [
      {
        series: { number: 1, of: 1 },
        element: { number: 2, of: 2 }
      },
      {
        series: { number: 1, of: 1 },
        element: { number: 1, of: 1 }
      }
    ],
    true
  ),
  'Addendum 1.'
)
```

The children of each schedule are numbered by [outline-numbering][outline-numbering] as well:

```javascript
assert.deepStrictEqual(
  pae(
    [
      {
        series: { number: 1, of: 1 },
        element: { number: 2, of: 2 }
      },
      {
        series: { number: 1, of: 1 },
        element: { number: 1, of: 1 }
      },
      {
        series: { number: 1, of: 1 },
        element: { number: 1, of: 1 }
      }
    ],
    false
  ),
  'Section 1 of Addendum 1'
)
```

# Exhibits

Any other child form is an exhibit:

```javascript
assert.deepStrictEqual(
  pae(
    [
      {
        series: { number: 1, of: 1 },
        element: { number: 3, of: 3 }
      }
    ],
    true
  ),
  'Exhibit 1.'
)

assert.deepStrictEqual(
  pae(
    [
      {
        series: { number: 1, of: 2 },
        element: { number: 3, of: 3 }
      }
    ],
    true
  ),
  'Exhibit A-1.'
)

assert.deepStrictEqual(
  pae(
    [
      {
        series: { number: 11, of: 11 },
        element: { number: 13, of: 13 }
      }
    ],
    true
  ),
  'Exhibit K-13.'
)

assert.deepStrictEqual(
  pae(
    [
      {
        series: { number: 1, of: 1 },
        element: { number: 3, of: 3 }
      }
    ],
    false
  ),
  'Exhibit 1'
)
```

The children of each exhibit are numbered by [outline-numbering][outline-numbering]:

```javascript
assert.deepStrictEqual(
  pae(
    [
      {
        series: { number: 1, of: 1 },
        element: { number: 3, of: 3 }
      },
      {
        series: { number: 1, of: 1 },
        element: { number: 1, of: 1 }
      }
    ],
    false
  ),
  'Section 1 of Exhibit 1'
)

assert.deepStrictEqual(
  pae(
    [
      {
        series: { number: 1, of: 1 },
        element: { number: 3, of: 3 }
      },
      {
        series: { number: 1, of: 1 },
        element: { number: 1, of: 1 }
      }
    ],
    true
  ),
  '1.'
)
```

[outline-numbering]: https://npmjs.com/packages/outline-numbering
