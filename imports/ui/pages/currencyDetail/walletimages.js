import { Template } from 'meteor/templating'
import { WalletImages } from '/imports/api/indexDB.js'
import { FlowRouter } from 'meteor/staringatlights:flow-router'

import './walletimages.html'

Template.walletimages.onCreated(function(){
  this.autorun(() => {
    SubsCache.subscribe('walletImagesSlug', FlowRouter.getParam('slug'))
  });
});

Template.walletimages.helpers({
  walletimages: function () {
    return WalletImages.find({currencySlug: FlowRouter.getParam('slug')});
  }
});
Template.walletImage.helpers({
  walletimagesdir(){
    return _walletUpoadDirectoryPublic;
  }
});

Template.walletimages.events({
  'click .walletImageOpen': (event, templateInstance) => {

    $('#img_'+ event.currentTarget.id).modal('show');
  }
});
