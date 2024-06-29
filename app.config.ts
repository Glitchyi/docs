export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'HeyForm Help Center',
      description: 'Get the most out of HeyForm with our detailed help center guides and practices.',
    },
    theme: {
      customizable: false,
      color: 'Blue',
      radius: 0.5,
    },
    header: {
      title: 'HeyForm Help Center',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/heyform/docs',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright HeyForm © 2024',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/heyform/docs',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/heyform/heyform',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/heyform/heyform/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});