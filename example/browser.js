var wsock = require('websocket-stream')
var ndjson = require('ndjson')
var Stuk = require('..')

var stuk = new Stuk

process.nextTick(function () {
  var whref = (location.protocol === 'https:' ? 'wss://' : 'ws://')
    + location.host
  var ws = wsock(whref)
  var parse = ndjson.parse()

  ws.pipe(parse).on('data', function (row) {
    stuk.tick(row.value)
  })
})

var root = document.querySelector('#content')
root.appendChild(stuk.el)
