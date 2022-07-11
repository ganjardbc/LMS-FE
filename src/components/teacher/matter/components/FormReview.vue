<template>
    <div id="App">
        <div class="card box-shadow bg-white">
            <div class="padding padding-15px">
                <div class="fonts fonts-14 semibold black">Review Materi</div>
                <div class="padding padding-top-10px padding-bottom-5px">
                    <div class="fonts fonts-11 semibold black">Ruang Kelas</div>
                    <div class="padding padding-bottom-30px padding-top-5px">
                        <div class="card bg-white border-full display-flex align-center">
                            <div 
                                class="image image-60px bg-size-contain bg-white-grey margin margin-right-15px"
                                :style="`background-image: url('');`"
                                ></div>
                            <div style="width: calc(100% - 235px);">
                                <div class="fonts fonts-11 black semibold">Kelas 3.A</div>
                                <div class="fonts fonts-10 grey normal">SMA | Angkatan 2020</div>
                                <div class="display-flex flex-left">
                                    <div class="fonts fonts-10 normal grey"><span class="fonts fonts-10 semibold primary">20</span> Murid</div>
                                </div>
                            </div>
                            <div class="width width-160px display-flex flex-end align-center">
                                <button class="btn btn-primary btn-circle">
                                    <i class="fa fa-lg fa-check-circle"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="fonts fonts-11 semibold black">Mata Pelajaran</div>
                    <div class="padding padding-bottom-30px padding-top-5px">
                        <div class="card bg-white border-full display-flex align-center">
                            <div 
                                class="image image-60px bg-size-contain bg-white-grey margin margin-right-15px"
                                :style="`background-image: url('');`"
                                ></div>
                            <div style="width: calc(100% - 235px);">
                                <div class="fonts fonts-11 black semibold">Matematika</div>
                                <div class="display-flex flex-left">
                                    <div class="fonts fonts-10 normal grey"><span class="fonts fonts-10 semibold primary">15</span> Materi Ajar</div>
                                </div>
                            </div>
                            <div class="width width-160px display-flex flex-end align-center">
                                <button class="btn btn-primary btn-circle">
                                    <i class="fa fa-lg fa-check-circle"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="fonts fonts-11 semibold black">Materi</div>
                    <div class="padding padding-bottom-30px">
                        <div class="padding padding-top-10px padding-bottom-5px">
                            <div class="fonts fonts-11 semibold black">Cover</div>
                            <div class="image image-150px bg-white-grey"></div>
                        </div>
                        <div class="padding padding-top-10px padding-bottom-5px">
                            <div class="fonts fonts-11 semibold black">Judul :</div>
                            <div class="fonts fonts-11 normal black">MTK Pertemuan 1</div>
                        </div>
                        <div class="padding padding-top-10px padding-bottom-5px">
                            <div class="fonts fonts-11 semibold black">Deskripsi :</div>
                            <div class="fonts fonts-11 normal black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        </div>
                    </div>

                    <div class="fonts fonts-11 semibold black">Dokumen</div>
                    <div class="padding padding-bottom-0">
                        <div class="padding padding-top-10px padding-bottom-5px">
                            <div class="fonts fonts-11 semibold black">File</div>
                            <div class="image image-150px bg-white-grey"></div>
                        </div>
                        <div class="padding padding-top-10px padding-bottom-5px">
                            <div class="fonts fonts-11 semibold black">Tipe File :</div>
                            <div class="fonts fonts-11 normal black">Audio</div>
                        </div>
                        <div class="padding padding-top-10px padding-bottom-5px">
                            <div class="fonts fonts-11 semibold black">Deskripsi :</div>
                            <div class="fonts fonts-11 normal black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'App'
}
</script>