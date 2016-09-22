'use strict';

var
	Types = require('%PathToCoreWebclientModule%/js/utils/Types.js')
;

module.exports = {
	ServerModuleName: 'GoogleAuthWebclient',
	HashModuleName: 'google-auth',
	
	Connected: false,
	
	EnableModule: false,
	Id: '',
	Secret: '',
	Key: '',
	
	/**
	 * Initializes settings from AppData object section of this module.
	 * 
	 * @param {Object} oAppDataSection Object contained module settings.
	 */
	init: function (oAppDataSection)
	{
		if (oAppDataSection)
		{
			this.Connected = !!oAppDataSection.Connected;
			
			this.EnableModule = !!oAppDataSection.EnableModule;
			this.Id = Types.pString(oAppDataSection.Id);
			this.Secret = Types.pString(oAppDataSection.Secret);
			this.Key = Types.pString(oAppDataSection.Key);
		}
	},
	
	/**
	 * Updates settings that is edited by administrator.
	 * 
	 * @param {boolean} bEnableModule
	 * @param {string} sId
	 * @param {string} sSecret
	 * @param {string} sKey
	 */
	updateAdmin: function (bEnableModule, sId, sSecret, sKey)
	{
		this.EnableModule = bEnableModule;
		this.Id = sId;
		this.Secret = sSecret;
		this.Key = sKey;
	}
};
