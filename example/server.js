var path = require('path')
var http = require('http')
var ecstatic = require('ecstatic')
var wsock = require('websocket-stream')
var pump = require('pump')
var ndjson = require('ndjson')

var st = ecstatic(path.join(__dirname, 'public'))

var server = http.createServer(st)
server.listen(8000, function () {
  console.log('listening on :' + server.address().port)
})

wsock.createServer({ server: server }, onwsock)

function onwsock (dest) {
  var serialize = ndjson.serialize()

  setInterval(function () {
    serialize.write({ value: Math.random() * 10090 })
  }, 300)

  pump(serialize, dest)
}