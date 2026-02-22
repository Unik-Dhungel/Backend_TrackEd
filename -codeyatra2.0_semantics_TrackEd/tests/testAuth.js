const { createClient } = require('@supabase/supabase-js');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const testAuth = async () => {
    console.log('Testing Supabase Auth Setup...');

    const testEmail = `test_${Date.now()}@tracked.edu`;

    // 1. Sign up a fake test user
    console.log(`1. Attempting to create user: ${testEmail}`);
    const { data: authData, error: authError } = await supabase.auth.signUp({
        email: testEmail,
        password: 'securepassword123',
    });

    if (authError) {
        console.error('❌ Could not sign up user in Supabase Auth:', authError.message);
        return;
    }
    console.log('✅ User successfully created in Supabase Auth:', authData.user.id);

    // 2. Fetch the JWT token
    const { data: sessionData, error: sessionError } = await supabase.auth.signInWithPassword({
        email: testEmail,
        password: 'securepassword123',
    });

    if (sessionError) {
        console.error('❌ Could not sign in to get token:', sessionError.message);
        return;
    }

    const token = sessionData.session.access_token;
    console.log('✅ User JWT successfully generated.');
    console.log('\n--- HOW TO TEST API ROUTES ---');
    console.log('You can now use Postman or Curl to test the backend API (http://localhost:5000)');
    console.log('Make sure to include this precise Access Token in the Header of your requests:');
    console.log(`\nAuthorization: Bearer ${token}\n`);

    console.log('Example cURL command for your terminal:');
    console.log(`curl http://localhost:5000/api/auth/profile -H "Authorization: Bearer ${token}"`);
};

testAuth();
