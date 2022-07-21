<template>
    <div id="App">
        <div class="card box-shadow bg-white">
            <div class="padding padding-15px">
                <div class="fonts fonts-14 semibold black">Review Materi</div>
                <div class="padding padding-top-10px padding-bottom-5px">
                    <div class="fonts fonts-11 semibold black">Ruang Kelas</div>
                    <div class="padding padding-bottom-30px padding-top-5px">
                        <div v-if="findClassRoom" class="card bg-white border-full display-flex align-center">
                            <div 
                                class="image image-60px bg-size-contain bg-white margin margin-right-15px"
                                :style="`background-image: url(${findClassRoom.image});`"
                                ></div>
                            <div style="width: calc(100% - 235px);">
                                <div class="fonts fonts-11 black semibold">{{ findClassRoom.title }}</div>
                                <div class="fonts fonts-10 grey normal">{{ findClassRoom.description }}</div>
                                <div class="display-flex flex-left">
                                    <div class="fonts fonts-10 normal grey"><span class="fonts fonts-10 semibold primary">{{ findClassRoom.student }}</span> Murid</div>
                                </div>
                            </div>
                            <div class="width width-160px display-flex flex-end align-center">
                                <button class="btn btn-primary btn-circle">
                                    <i class="fa fa-lg fa-check-circle"></i>
                                </button>
                            </div>
                        </div>
                        <div v-else class="card bg-white border-full display-flex align-center">
                            <div class="fonts fonts-11 normal black">Ruang kelas belum dipilih</div>
                        </div>
                    </div>

                    <div class="fonts fonts-11 semibold black">Mata Pelajaran</div>
                    <div class="padding padding-bottom-30px padding-top-5px">
                        <div v-if="findSubject" class="card bg-white border-full display-flex align-center">
                            <div 
                                class="image image-60px bg-size-contain bg-white margin margin-right-15px"
                                :style="`background-image: url(${findSubject.image});`"
                                ></div>
                            <div style="width: calc(100% - 235px);">
                                <div class="fonts fonts-11 black semibold">{{ findSubject.title }}</div>
                                <div class="fonts fonts-10 grey normal">{{ findSubject.description }}</div>
                                <div class="display-flex flex-left">
                                    <div class="fonts fonts-10 normal grey"><span class="fonts fonts-10 semibold primary">{{ findSubject.subject }}</span> Materi Ajar</div>
                                </div>
                            </div>
                            <div class="width width-160px display-flex flex-end align-center">
                                <button class="btn btn-primary btn-circle">
                                    <i class="fa fa-lg fa-check-circle"></i>
                                </button>
                            </div>
                        </div>
                        <div v-else class="card bg-white border-full display-flex align-center">
                            <div class="fonts fonts-11 normal black">Mata pelajaran belum dipilih</div>
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
                    <div class="padding padding-bottom-30px padding-top-5px">
                        <div class="card bg-white border-full display-flex align-center">
                            <div 
                                class="image image-60px bg-size-contain bg-white-grey margin margin-right-15px"
                                :style="`background-image: url('');`"
                                ></div>
                            <div style="width: calc(100% - 75px);">
                                <div class="fonts fonts-11 black semibold">PDF</div>
                                <div class="fonts fonts-10 black normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'App',
    computed: {
        ...mapState({
            formMatter: state => state.teacherMatter.form,
            errorMessage: state => state.teacherMatter.errorMessage,
            dataClassRoom: state => state.teacherMatter.dataClassRoom,
            dataSubject: state => state.teacherMatter.dataSubject,
        }),
        selectedClassRoom () {
            return this.formMatter.classRoom 
        },
        selectedSubject () {
            return this.formMatter.subject
        },
        findClassRoom () {
            return this.dataClassRoom.find((item) => item.id === this.selectedClassRoom)
        },
        findSubject () {
            return this.dataSubject.find((item) => item.id === this.selectedSubject)
        }
    },
}
</script>