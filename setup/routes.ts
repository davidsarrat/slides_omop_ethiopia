import { defineRoutesSetup } from '@slidev/types'

// Slidev's getSlidePath() prepends import.meta.env.BASE_URL to the slide
// number and then feeds it to router.push({ path }), which re-applies the
// router base. With a non-root base (project GitHub Pages) this doubles the
// base, e.g. /dsomop_ethiopia/#/dsomop_ethiopia/2, breaking navigation.
// Catch the base-prefixed path and redirect to the clean route.
export default defineRoutesSetup((routes) => {
  const base = import.meta.env.BASE_URL
  if (base && base !== '/') {
    const prefix = base.replace(/\/+$/, '')
    routes.unshift({
      path: `${prefix}/:rest(.*)`,
      redirect: to => ({ path: `/${to.params.rest || ''}`, query: to.query }),
    })
  }
  return routes
})
