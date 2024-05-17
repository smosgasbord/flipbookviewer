import * as flipbook from '/src/flipbook-viewer.js'

import * as book from '/src/book-pdf.js'

function main() {
  const opts = {
    width: 800,
    height: 600,
  }

  const app = document.getElementById('app')
  const next = document.getElementById('next')
  const prev = document.getElementById('prev')
  const zoom = document.getElementById('zoom')

  book.init('https://flipbookviewer.vercel.app/test/fp.pdf', (err, book) => {
    if(err) console.error(err)
    else flipbook.init(book, app, opts, (err, viewer) => {
      if(err) return console.error(err)

      viewer.on('seen', n => console.log('page number: ' + n))

      next.onclick = () => viewer.flip_forward();
      prev.onclick = () => viewer.flip_back();
      zoom.onclick = () => viewer.zoom();

    })
  })

}

main()
