import React from 'react';
import { Box, useTheme } from '@mui/material';
import { DataGridPremium } from '@mui/x-data-grid-premium';
import Header from './Header';
import { tokens } from '../theme';
import { mockDataTeam } from '../data/mockData';

const ContectInformation = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column-cell" },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "phone", headerName: "Phone Number", flex: 1 },
        { field: "address", headerName: "Address", flex: 1 },
        { field: "city", headerName: "City", flex: 1 },
        { field: "zipcode", headerName: "Zipcode", flex: 1, type: "number" }
    ];

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="flex-start" alignItems="left" textAlign="left">
                <Header title="CONTACTS" subtitle="List of Contacts for Future Reference" />
            </Box>
            <Box m="40px 0 0 0" height="75vh">
                <DataGridPremium 
                    rows={mockDataTeam}
                    columns={columns}
                    pageSize={20}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    aggregationModel={{}} 
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none",
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none",
                        },
                        "& .name-column-cell": {
                            color: colors.greenAccent[300],
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

export default ContectInformation;
