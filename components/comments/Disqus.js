import React, { useState } from 'react'

import siteMetadata from '@/data/siteMetadata'

const Disqus = ({ frontMatter }) => {
  const [enableLoadComments, setEnabledLoadComments] = useState(true)

  const COMMENTS_ID = 'disqus_thread'

  function LoadComments() {
    setEnabledLoadComments(false)

    window.disqus_config = function () {
      this.page.url = window.location.href
      this.page.identifier = frontMatter.slug
    }
    if (window.DISQUS === undefined) {
      var d = document,
        s = d.createElement('script')
      s.src = 'https://blogmundohistorias.disqus.com/embed.js'
      s.setAttribute('data-timestamp', +new Date())
      ;(d.head || d.body).appendChild(s)
    } else {
      window.DISQUS.reset({ reload: true })
    }
  }

  return (
    <div className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300">
      {enableLoadComments && <button onClick={LoadComments}>Load Comments</button>}
      <div className="disqus-frame" id={COMMENTS_ID} />
    </div>
  )
}

export default Disqus
