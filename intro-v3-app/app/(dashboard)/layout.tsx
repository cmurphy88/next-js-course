import React from 'react'

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <div>
            <h1>Dashboard</h1>
            <div>{children}</div>
        </div>
    )
}

export default DashboardLayout
