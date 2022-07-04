<template>
    <div id="app">
        <div id="header">
            <div 
                id="header-container" 
                class="display-flex space-between align-center">
                <div class="fonts fonts-22 semibold">LOGO</div>
                <div class="display-flex right align-center">
                    <button class="btn btn-circle btn-white">
                        <i class="far fa-lg fa-life-ring"></i>
                    </button>
                    <button class="btn btn-circle btn-white">
                        <i class="far fa-lg fa-bell"></i>
                    </button>
                    <button class="btn btn-circle btn-white">
                        <i class="far fa-lg fa-user"></i>
                    </button>
                    <button class="btn btn-circle btn-main" style="margin-left: 15px;">
                        <i class="icn icn-left fa fa-lg fa-plus-circle"></i> Create
                    </button>
                </div>
            </div>
        </div>
        <div id="body">
            <keep-alive>
                <router-view />
            </keep-alive>
        </div>
    </div>
</template>