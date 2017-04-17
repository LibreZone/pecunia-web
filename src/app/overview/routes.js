const Overview = (r) => require.ensure([], () => r(require('./components/Overview')), 'overview-bundle')

export default [
  {
    name: 'overview',
    path: '/overview',
    component: Overview
  }
]
