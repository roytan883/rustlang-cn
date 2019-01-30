exports.cargo = (title) => {
    return [
        '',
        {
            title: '开始',
            collapsable: true,
            children: [
            'getting_started/index',
            'getting_started/installation',
            'getting_started/first-steps'
            ]
        },
        {
            title: 'Cargo指南',
            collapsable: true,
            children: [
            'guide/index',
            'guide/why-cargo-exists',
            'guide/creating-a-new-project',
            'guide/working-on-an-existing-project',
            'guide/dependencies',
            'guide/project-layout',
            'guide/cargo-toml-vs-cargo-lock',
            'guide/tests',
            'guide/continuous-integration',
            'guide/build-cache'
            ]
        },
        {
            title: 'Cargo参考',
            collapsable: true,
            children: [
            'reference/index',
            'reference/specifying-dependencies',
            'reference/manifest',
            'reference/config',
            'reference/environment-variables',
            'reference/build-scripts',
            'reference/publishing',
            'reference/pkgid-spec',
            'reference/source-replacement',
            'reference/external-tools',
            'reference/unstable'
            ]
        },
        'faq',
        'appendix/glossary'
    ]
}