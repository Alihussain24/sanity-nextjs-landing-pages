export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '62b06ab27e4d502e275e949e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-oqupqwqp',
                  apiId: 'ae92780b-c85d-48fc-97ef-fe4c0df6d6fe'
                },
                {
                  buildHookId: '62b06ab26d067628fd26c37d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7omjpugu',
                  apiId: '846bce25-4043-4912-827d-2b7feb9bbb70'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Alihussain24/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7omjpugu.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
