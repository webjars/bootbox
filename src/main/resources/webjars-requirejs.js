requirejs.config({
    paths: { "bootbox": webjars.path("bootbox", "bootbox") },
    shim: { "bootbox": [ "bootstrap" ] }
});