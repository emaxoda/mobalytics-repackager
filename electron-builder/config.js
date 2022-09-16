
module.exports = {
    generateUpdatesFilesForAllChannels: false,
    appId: `com.sekwah.mobalytics-repackager`,
    productName: `Mobalytics`,
    remoteBuild: false,
    directories: {
        buildResources: "app"
    },
    files: [
        "electron-src/**/*",
        "resources/**",
    ],
    linux: {
        icon: "resources/icons/",
        category: "Game",
        publish: null,
        target: [
            "AppImage",
            "snap",
            "deb",
            "rpm"
        ]
    },
    protocols: [{
        name: "mobalytics",
        schemes: [
            "mobalytics"
        ]
    }],
}
