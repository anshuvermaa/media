exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      teamMembers: allWpPost(
        filter: { categories: { nodes: { elemMatch: { name: { eq: "Team Member Profile" } } } } }
      ) {
        nodes {
          slug
        }
      }
      services: allWpPost(
        filter: { categories: { nodes: { elemMatch: { name: { eq: "Service" } } } } }
      ) {
        nodes {
          slug
        }
      }
      technologies: allWpPost(
        filter: { categories: { nodes: { elemMatch: { name: { eq: "Single Technology" } } } } }
      ) {
        nodes {
          slug
        }
      }
    }
  `)
  data.services.nodes.forEach((node) => {
    const slug = node.slug
    actions.createPage({
      path: '/services/' + slug,
      component: require.resolve(`./src/templates/service.tsx`),
      context: { slug: slug },
    })
  })
  data.technologies.nodes.forEach((node) => {
    const slug = node.slug
    actions.createPage({
      path: '/technology/' + slug,
      component: require.resolve(`./src/templates/technology.tsx`),
      context: { slug: slug },
    })
  })
  data.teamMembers.nodes.forEach((node) => {
    const slug = node.slug
    actions.createPage({
      path: '/ourteam/' + slug,
      component: require.resolve(`./src/templates/member.tsx`),
      context: { slug: slug },
    })
  })
}
