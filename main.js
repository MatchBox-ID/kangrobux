document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value; 
    const password = document.getElementById('password').value;
    const isValid = validateLogin(username, password);

    if (isValid) {
        Swal.fire({
            title: 'Login Berhasil!',
            text: 'Akun anda telah berhasil ditemukan! \n Selamat datang di dashboard!',            
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            window.location.href = './dashboard';
        });
    } else {
        Swal.fire({
            title: 'Login Gagal',
            text: 'Akun tidak ditemukan! \n Cek kembali username dan password Anda.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
});

function validateLogin(username, password) {
    const validUsers = [
        { username: 'admin', password: 'Semarang20?' },
        { username: 'kangroblox', password: 'Semarang35?' },
        { username: 'getverify', password: 'Semarang65?' },
        { username: 'genhost', password: 'Semarang99?' },
        { username: 'anakrusa', password: 'hackerbanyakgaya' },
        { username: 'roblox', password: 'robloxofficial2023' },
        { username: 'sanzycareplayer', password: 'thekingofroblox' }
    ];

    // Periksa apakah kombinasi username dan password sesuai dengan salah satu pasangan yang valid
    for (const user of validUsers) {
        if (username === user.username && password === user.password) {
            return true;
        }
    }

    return false;
}
