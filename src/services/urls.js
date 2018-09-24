
const serverAddress = 'http://tafakorq.ir';

export const urls = {
    // post urls.
    getMainPageItems: serverAddress.concat('/AppContent/Home/Index'),
    getSocialAddresses: serverAddress.concat('/AppContent/Home/Socials'),
    getPost: serverAddress.concat('/AppContent/Home/Socials'),
    getPostDetails: serverAddress.concat('/AppContent/Posts/Details'),
    getByCategoryId: serverAddress.concat('/AppContent/Categories/Index'),
    getFile: serverAddress.concat('/AppContent/Posts/GetFile'),

    // payment urls.
    finalizePurchase: serverAddress.concat('/AppContent/Purchase/GetPurchaseDetails'),

    // auth urls.
    sendMobile: serverAddress.concat('/AppContent/Authentication/SendSMS'),
    verifyCode: serverAddress.concat('/AppContent/Authentication/CheckCode'),
    updateUser: serverAddress.concat('/UserPanel/Profile/Edit'),
    
    // layout data urls.
    layoutUrl: serverAddress.concat('/AppContent/Home/Layout'),

    // category urls.
    categoryDetails: serverAddress.concat('/AppContent/Categories/Details')
}