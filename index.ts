const color = 'rgb(29, 181, 162)'
const bars = 5
const lo = 5
const gap = 2
const width = 360
const height = 190

class Stuk {
  ctx: CanvasRenderingContext2D
  canvas: HTMLCanvasElement
  state: number[]
  el: HTMLDivElement

  _plot (): void {
    this.ctx.clearRect(0, 0, width, height)

    var max = Math.max.apply(null, this.state),
    min = Math.min.apply(null, this.state),
    j = max - min

    this.state.forEach((x, i) => {
      let scaled = (x/j) * height
      this.ctx.fillRect(width - bars - (i * bars), height, bars, -scaled)
    })
  }

  _drawbg (): void {
    var lx = width + gap
    var ctx = this.ctx

    ctx.moveTo(0, height)
    ctx.lineTo(width - 1, height)

    ctx.moveTo(lx, 0)
    ctx.lineTo(lx, height)

    ctx.moveTo(lx, lo)
    ctx.lineTo(lx + gap, lo)

    ctx.moveTo(lx, Math.round(height/2))
    ctx.lineTo(lx + gap, Math.round(height/2))

    ctx.moveTo(lx, height - lo)
    ctx.lineTo(lx + gap, height - lo)

    ctx.stroke()

    ctx.setTransform(1, 0, 0, 1, 0, 0)
  }

  tick (val: number): void {
    if (this.state.length >= (width / bars))
      this.state.pop()
    this.state.unshift(val)
    this._plot()
  }

  constructor () {
    this.canvas = document.createElement('canvas')   
    this.canvas.width = width + 10
    this.canvas.height = height + 1

    this.ctx = this.canvas.getContext('2d')
    this.ctx.translate(0.5, 0.5)
    this.ctx.lineWidth = 1
    this.ctx.strokeStyle = this.ctx.fillStyle = color

    this.el = document.createElement('div')
    this.el.style.width = width + 20 + 'px'
    this.el.style.height = height + 1 + 'px'

    this.el.appendChild(this.canvas)

    this.state = []

    this._drawbg()
  }
}

export = Stuk
