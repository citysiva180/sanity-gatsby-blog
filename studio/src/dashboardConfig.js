export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd091074d85ffcf7d6c68e7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4mc7z2by',
                  apiId: '366dfefc-28bf-4ae4-b303-f8cb587e195b'
                },
                {
                  buildHookId: '5fd0910721b38baee9da7a8c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ppintxzp',
                  apiId: 'a8253baf-5b76-4051-86b6-013fdf24ca54'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/citysiva180/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ppintxzp.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
