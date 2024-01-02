$(document).ready(function () {

    $('#btn-buscar-usuario').click(function () {
        const usuarioSearch = document.getElementById('user').value;
        const enpoint = `https://api.github.com/users/${usuarioSearch}`;
        const profileBio = document.getElementById('profile-bio');
        const profileBlog = document.getElementById('profile-blog');
        const botao = $(this);

        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        fetch(enpoint)
            .then(function (resposta) {
                return resposta.json();
            })
            .then(function (json) {
                nome.innerHTML = json.name;
                usuario.innerHTML = json.login;
                avatar.src = json.avatar_url;
                seguindo.innerHTML = json.following;
                seguidores.innerHTML = json.followers;
                repostorio.innerHTML = json.public_repos;
                link.href = json.html_url;
                bio.innerHTML = json.bio;
                blog.innerHTML = json.blog;

                $('#nome').val(nome);
                $('#usuario').val(usuario);
                $('#avatar').val(avatar);
                $('#seguindo').val(seguindo);
                $('#seguidores').val(seguidores);
                $('#repostorio').val(repostorio);
                $('#link').val(link);
                $('#bio').val(bio);
                $('#blog').val(blog);

                if (json.bio == null) {
                    profileBio.style.display = 'none';
                } else {
                    profileBio.style.display = 'block';
                }

                if (json.blog == null) {
                    profileBlog.style.display = 'none';
                } else {
                    profileBlog.style.display = 'block';
                }

                if (json.name == null) {
                    nome.innerHTML = '';
                } else {
                    nome.innerHTML = json.name;
                }

                if (json.login == null) {
                    usuario.innerHTML = '';
                } else {
                    usuario.innerHTML = json.login;
                }

                if (json.avatar_url == null) {
                    avatar.src = 'https://avatars.githubusercontent.com/u/9919?v=4';
                } else {
                    avatar.src = json.avatar_url;
                }

                if (json.following == null) {
                    seguindo.innerHTML = '0';
                } else {
                    seguindo.innerHTML = json.following;
                }

                if (json.followers == null) {
                    seguidores.innerHTML = '0';
                } else {
                    seguidores.innerHTML = json.followers;
                }

                if (json.public_repos == null) {
                    repostorio.innerHTML = '0';
                } else {
                    repostorio.innerHTML = json.public_repos;
                }

                if (json.html_url == null) {
                    link.href = '';
                } else {
                    link.href = json.html_url;
                }

                if (json.bio == null) {
                    bio.innerHTML = '';
                } else {
                    bio.innerHTML = json.bio;
                }

                if (json.blog == null) {
                    blog.innerHTML = '';
                } else {
                    blog.innerHTML = json.blog;
                }
               
            })
            .catch(function () {
                modalErro();
                nome.innerHTML = '';
                usuario.innerHTML = '';
                avatar.src = 'https://avatars.githubusercontent.com/u/9919?v=4';
                seguindo.innerHTML = '0';
                seguidores.innerHTML = '0';
                repostorio.innerHTML = '0';
                link.href = '';
                bio.innerHTML = '';
                blog.innerHTML = '';
            })
            .finally(function () {
                setTimeout(function () {
                    $(botao).find('i').removeClass('d-none');
                    $(botao).find('span').addClass('d-none');
                    $('#user').val('');
                }, 1000);
            })
    });
});

function modalErro() {
    var erro = document.getElementById("modal-erro");
    erro.style.display = 'flex';
}