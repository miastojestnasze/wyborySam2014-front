##WyborySam2014 frontend repo

### Instruction 
#### for Linux and OSX users.

> 1. npm install
> 2. bower install
> 3. go to 'bower_components/bootstrap/'
> 4. open bower.json and .bower.json
> 5. find and replace field 'main'

from

```json
"main": [
    "less/bootstrap.less",
    "dist/js/bootstrap.js"
  ]
```
to

```json
  "main": [
    "dist/js/bootstrap.js",
    "dist/css/bootstrap.min.css"
  ]
```
> 6. gulp build-all
> 7. cd build
> 8. python -m SimpleHTTPServer