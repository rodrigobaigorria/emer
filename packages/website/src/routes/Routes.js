import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';

const Routes = () => {
	return (
		<BrowserRouter>
			<Dashboard />
		</BrowserRouter>
	);
};

export default Routes;
