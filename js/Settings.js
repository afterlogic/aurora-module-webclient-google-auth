'use strict';

var
	Types = require('modules/CoreClient/js/utils/Types.js')
;

module.exports = {
	ServerModuleName: 'GoogleAuth',
	HashModuleName: 'google-auth',
	
	EnableModule: false,
	Id: '',
	Secret: '',
	
	/**
	 * Initializes settings from AppData object section of this module.
	 * 
	 * @param {Object} oAppDataSection Object contained module settings.
	 */
	init: function (oAppDataSection)
	{
		if (oAppDataSection)
		{
			this.EnableModule = !!oAppDataSection.EnableModule;
			this.Id = Types.pString(oAppDataSection.Id);
			this.Secret = Types.pString(oAppDataSection.Secret);
		}
	},
	
	/**
	 * Updates settings that is edited by administrator.
	 * 
	 * @param {boolean} bEnableModule
	 * @param {string} sId
	 * @param {string} sSecret
	 */
	updateAdmin: function (bEnableModule, sId, sSecret)
	{
		this.EnableModule = bEnableModule;
		this.Id = sId;
		this.Secret = sSecret;
	}
};
