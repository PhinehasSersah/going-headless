import StoryblokClient from 'storyblok-js-client'

class StoryblokService {
  constructor() {
    this.devMode = true // Always loads draft
    this.token = 'Qmf8pyo1FyYVHrUhBO9RFQtt'
    this.client = new StoryblokClient({
      accessToken: this.token,
      cache: {
        clear: 'auto',
        type: 'memory'
      }
    })

    this.query = {}
  }

  getCacheVersion() {
    return this.client.cacheVersion
  }

  get(slug, params) {
    params = params || {}

    if (this.getQuery('_storyblok') || this.devMode || (typeof window !== 'undefined' && window.storyblok)) {
      params.version = 'draft'
    }

    if (typeof window !== 'undefined' && typeof window.StoryblokCacheVersion !== 'undefined') {
      params.cv = window.StoryblokCacheVersion
    }

    return this.client.get(slug, params)
  }

  initEditor(reactComponent) {
    if (window.storyblok) {
      window.storyblok.init()
      window.storyblok.on(['change', 'published'], () => location.reload(true))

      // this will alter the state and replaces the current story with a current raw story object (no resolved relations or links)
      window.storyblok.on('input', (event) => {
        if (event.story.content._uid === reactComponent.state.story.content._uid) {
          event.story.content = window.storyblok.addComments(event.story.content, event.story.id)
          window.storyblok.resolveRelations(event.story, ['featured-articles.articles'], () => {
            reactComponent.setState({
              story: event.story
            })
          })
        }
      })
    }
  }

  setQuery(query) {
    this.query = query
  }

  getQuery(param) {
    return this.query[param]
  }

  bridge() {
    if (!this.getQuery('_storyblok') && !this.devMode) {
      return ''
    }
    // eslint-disable-next-line @next/next/no-sync-scripts
    return (<script src={'//app.storyblok.com/f/storyblok-latest.js?t=' + this.token}></script>)
  }
}

const storyblokInstance = new StoryblokService()

export default storyblokInstance