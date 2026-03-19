import { yt_html } from "../assests/assets"
import { useSearchParams } from "react-router-dom"

export const YtPreview = () => {

  const [searchParams] = useSearchParams()

  const thumbnail_url = searchParams.get('thumbnail_url') || ''
  const title = searchParams.get('title') || 'Preview'

  const new_html = yt_html
    .replace("%%THUMBNAIL_URL%%", thumbnail_url)
    .replace("%%TITLE%%", title)

  return (
    <div className="fixed inset-0 z-[100] bg-black">
      
      <iframe
        srcDoc={new_html}
        className="w-full h-full"
        allowFullScreen
        sandbox="allow-scripts allow-same-origin"
      />

    </div>
  )
}