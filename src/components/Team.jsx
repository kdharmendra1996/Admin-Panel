import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Header from './Header';
import { tokens } from '../theme';
import { mockDataTeam } from '../data/mockData';
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";
import LockOpenOutlined from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlined from "@mui/icons-material/SecurityOutlined";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "name", headerName: "Name", flex: 1,cellClassName:"name-column-cell" },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "phone", headerName: "Phone Number", flex: 1 },
        {
            field: "access",
            headerName: "Access Level",
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={
                            access === "admin"
                                ? colors.greenAccent[600]
                                : colors.greenAccent[800]
                               
                        }
                        borderRadius="4px"
                    >
                        {access === "admin" && <AdminPanelSettings />}
                        {access === "manager" && <SecurityOutlined />}
                        {access === "user" && <LockOpenOutlined />}
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            {access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <Box m="20px">
           <Box display="flex" justifyContent="flex-start" alignItems="left" textAlign="left">
                <Header title="TEAM" subtitle="Managing the Team Members" />
            </Box>
            <Box m="40px 0 0 0" height="75vh">
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                    pageSize={20}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none",
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none",
                        },
                        "& .name-column-cell":{
                            color:colors.greenAccent[300]
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: colors.blueAccent[700],
                            borderBottom: "none",
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: colors.primary[400],
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "none",
                            backgroundColor: colors.blueAccent[700],
                        },
                        "& .MuiCheckbox-root": {
                            color: `${colors.greenAccent[200]} !important`,
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default Team;
