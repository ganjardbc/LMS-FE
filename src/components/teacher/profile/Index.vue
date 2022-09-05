<template>
    <div id="App">
        <div class="width width-100">
            <div class="fonts fonts-32 semibold black">Profil</div>
            <div class="width width-100 display-flex space-between padding padding-top-30px padding-bottom-15px">
                <div class="width width-30">
                    <div class="card bg-white box-shadow">
                        <div class="width width-100 padding padding-top-10px">
                            <div class="display-flex column align-center padding padding-bottom-10px">
                                <div 
                                    class="image image-circle image-150px margin margin-bottom-10px"
                                    style="text-align: center;">
                                    <i 
                                        v-if="!image"
                                        class="post-top fa fa-4x fa-user-circle" 
                                        style="color: #999;" />
                                </div>
                                <div class="fonts fonts-12 semibold black">Ganjar Hadiatna</div>
                                <div class="fonts fonts-10 normal black">Guru / Pengajar</div>
                                <div class="display-flex row center margin margin-top-15px" style="width: 100%;">
                                    <div class="width width-50">
                                        <div class="fonts fonts-12 primary semibold align-center">15</div>
                                        <div class="fonts fonts-10 black normal align-center">Kelas</div>
                                    </div>
                                    <div class="width width-50">
                                        <div class="fonts fonts-12 primary semibold align-center">23</div>
                                        <div class="fonts fonts-10 black normal align-center">Mapel</div>
                                    </div>
                                    <div class="width width-50">
                                        <div class="fonts fonts-12 primary semibold align-center">77</div>
                                        <div class="fonts fonts-10 black normal align-center">Murid</div>
                                    </div>
                                </div>
                            </div>
                            <div class="margin margin-bottom-15px padding padding-top-15px border-bottom"></div>
                            <button class="btn btn-white btn-full btn-center">
                                <i class="fonts red icn icn-left fa fa-lg fa-power-off"></i> Logout
                            </button>
                        </div>
                    </div>
                </div>
                <div class="width width-67">
                    <div class="card bg-white box-shadow margin margin-bottom-30px">
                        <div class="fonts fonts-16 semibold black">Informasi</div>
                        <div 
                            v-for="(dt, i) in informations" 
                            :key="i"
                            class="width width-100 display-flex flex-start wrap margin margin-top-5px margin-bottom-5px">
                            <div class="width width-25">
                                <div class="fonts fonts-11 black semibold">
                                    {{ dt.key }}
                                </div>
                            </div>
                            <div class="width width-75">
                                <div class="fonts fonts-11 black normal">
                                    : {{ dt.value }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-white box-shadow margin margin-bottom-30px">
                        <div class="fonts fonts-16 semibold black">Kontak</div>
                        <div 
                            v-for="(dt, i) in contacts" 
                            :key="i"
                            class="width width-100 display-flex flex-start wrap margin margin-top-5px margin-bottom-5px">
                            <div class="width width-25">
                                <div class="fonts fonts-11 black semibold">
                                    {{ dt.key }}
                                </div>
                            </div>
                            <div class="width width-75">
                                <div class="fonts fonts-11 black normal">
                                    : {{ dt.value }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'App',
    data () {
        return {
            image: '',
            informations: [
                {key: 'NIP', value: '1011511511009'},
                {key: 'Nama', value: 'Ganjar Hadiatna'},
                {key: 'Jabatan', value: 'Guru / Pengajar'},
                {key: 'Alamat', value: 'Lorem ipsum doler ismet'},
            ],
            contacts: [
                {key: 'No. Telpon', value: '089699181669'},
                {key: 'E-mail', value: 'ganjarhadiatna.gh@gmail.com'},
            ],
        }
    }
}
</script>