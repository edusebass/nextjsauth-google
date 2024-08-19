import { createClient } from '@supabase/supabase-js'
import React from 'react'

const UsersPage = async () => {
    const supabase = createClient(

    )
    return (
        <div>UsersPage</div>
    )
}

export default UsersPage
