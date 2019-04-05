import React from 'react'
import { Paper, Tabs } from 'material-ui'
import { Tab } from 'material-ui/Tabs'

export default props =>
< Paper >
    <Tabs
        value = {0}
        indicatorColor = "primary"
        textColor = "primary"
        centered
    >
        <Tab label = "HD1" />
        <Tab label = "HD2" />
        <Tab label = "SC" />
        <Tab label = "TL" />
    </Tabs>
</Paper>