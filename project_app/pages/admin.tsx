import React from 'react';

import AdminLayout from '../components/AdminLayout';
import AdminLogin from '../components/AdminLogin';

export default function admin() {
  return (
    <AdminLayout>
        <AdminLogin/>
    </AdminLayout>
  )
}