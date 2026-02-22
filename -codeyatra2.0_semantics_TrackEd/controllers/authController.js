const { getAuthClient } = require('../config/dbConfig');

const getProfile = async (req, res) => {
    try {
        const supabase = getAuthClient(req.token);
        const { data, error } = await supabase
            .from('users')
            .select('id, full_name, email, role')
            .eq('id', req.user.id)
            .single();

        if (error) {
            return res.status(404).json({ success: false, error: 'User profile not found' });
        }

        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server error fetching profile' });
    }
};

module.exports = { getProfile };
