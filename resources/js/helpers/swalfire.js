import store from '../store'
const image = store.state.barImage;
export default {
    updateF(data, item) {
        return new Promise((res, rej) => {
            Swal.fire({
                title: data.title,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#1565c0',
                cancelButtonColor: '##0000008a',
                confirmButtonText: '<span class="mdi mdi-check-all">Confirmar</span>',
                cancelButtonText: 'Cancelar',
                reverseButtons: true,
                backdrop: `
                    rgba(0,0,123,0.4)
                    url("images/logo-final.png")
                    left top
                    no-repeat
                `
            }).then((result) => {
                if (result.value) {
                    item._method = 'put'
                    axios.post(data.url, item)
                        .then((response) => {
                            res(response.data.message)
                        }).catch((err) => {
                            console.log(err)
                            rej(err)
                        });
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {

                }
            })
        })
    },
    activeF(data) {
        return new Promise((res, rej) => {
            Swal.fire({
                title: data.title,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#1565c0',
                cancelButtonColor: '##0000008a',
                confirmButtonText: 'Aceptar!',
                cancelButtonText: 'Cancelar',
                reverseButtons: true
            }).then((result) => {
                if (result.value) {
                    let me = this;
                    axios.post(data.url, {
                        _method: 'put'
                    })
                        .then((response) => {
                            res(response.data.message)
                        }).catch((err) => {
                            console.log(err)
                            rej(err)
                        });
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {

                }
            })
        })
    },
    desactiveF(data) {
        return new Promise((res, rej) => {

            Swal.fire({
                title: data.title,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#b31d2b',
                cancelButtonColor: '##0000008a',
                confirmButtonText: 'Aceptar!',
                cancelButtonText: 'Cancelar',
                reverseButtons: true
            }).then((result) => {
                if (result.value) {
                    let me = this;
                    axios.post(data.url, {
                        _method: 'put'
                    })
                        .then((response) => {
                            res(response.data.message)
                        }).catch((err) => {
                            console.log(err)
                            rej(err)
                        });
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {

                }
            })
        })
    },

    deleteF(data) {
        return new Promise((res, rej) => {

            Swal.fire({
                title: data.title,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#1565c0',
                cancelButtonColor: '##0000008a',
                confirmButtonText: 'Aceptar!',
                cancelButtonText: 'Cancelar',
                reverseButtons: true
            }).then((result) => {
                if (result.value) {
                    let me = this;
                    axios.post(data.url, {
                        _method: 'delete'
                    })
                        .then((response) => {
                            res(response.data.message)
                        }).catch((err) => {
                            console.log(err)
                            rej(err)
                        });
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {

                }
            })
        })
    },
    validateF(data) {
        return new Promise((res, rej) => {
            Swal.fire({
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                },
                title: 'Falta(n) Datos',
                imageUrl: image,
                imageWidth: 300,
                icon: 'error',
                confirmButtonText: 'Aceptar!',
                confirmButtonColor: '#3085d6',
                html: `${data.map(er => `<br><span class="mb-3"><i class="mdi-close-circle-outline mr-3 red"></i> ${er}</span>`)}`,
                showCancelButton: false
            });
        });
    },
    moneyFormatF(data) {
        const formatter = new Intl.NumberFormat('es-Ve', {
            style: 'currency',
            currency: 'VES',
            minimumFractionDigits: 2
        });
        return formatter.format(data);
    }
}

