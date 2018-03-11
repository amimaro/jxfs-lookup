# jxfs-lookup [![Build Status](https://secure.travis-ci.org/amimaro/jxfs-lookup.svg?branch=master)](https://travis-ci.org/amimaro/jxfs-lookup) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

J/XFS Constant Field Values Lookup

## Installation

```bash
npm install --save jxfs-lookup
```

## Usage

```javascript
const jxfsLookup = require('jxfs-lookup')

jxfsLookup.query(CODE) // => CODE e.g., 1024
    .then(
        res => {
            console.log(res)
        }
    )
    .catch(
        err => {
            console.error(err)
        }
    );
```

## Testing

```bash
npm run test
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by amimaro ([@amir_zln](https://twitter.com/amir_zln)).
