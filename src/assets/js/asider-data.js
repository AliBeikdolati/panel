let custopmNavbar = [{
    name: 'لیست علاقه مندی',
    children: [{
        name: 'پرفروش ترین محصولات',
        children: []
    }, {
        name: 'محبوب ترین محصولات',
        children: []
    }, {
        name: 'جدید ترین محصولات',
        children: [{
            name: 'جدیدترین در هفته',
            children: []
        },{
            name: 'جدیدترین در ماه',
            children: []
        }]
    }]
}, {
    name: 'محصولات دیجیتالی',
    children: [{
        name: 'ساعت هوشمند',
        children: []
    }, {
        name: 'گوشی هوشمند',
        children: [{
            name: 'سامسونگ',
            children: [{
                name: "galexy a50",
                children: []
            }]
        }, {
            name: 'سونی',
            children: [{
                name: 'xperia c3',
                children: []
            }]
        }]
    },]
}];

let adminNavbar = [{
    name: 'ادمین',
    children: [{
        name: 'لیست کاربران',
        children: []
    }, {
        name: 'لیست محصولات',
        children: []
    }, {
        name: 'لیست گروه ها',
        children: []
    }]
}, {
    name: 'دسته بندی محصولات',
    children: [{
        name: 'لوازم التحریر',
        children: []
    }, {
        name: 'لوازم خانگی',
        children: [{
            name: 'تلویزیون',
            children: [{
                name: "سامسونگ",
                children: [{
                    name: "سام سرویس",
                    children: []
                }]
            }]
        }, {
            name: 'اجاق گاز',
            children: []
        }]
    },]
}];


export {
    custopmNavbar,
    adminNavbar
};