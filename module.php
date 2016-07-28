<?php

class GoogleAuthModule extends AApiModule
{
	public $oApiSocialManager = null;
	
	protected $aSettingsMap = array(
		'Id' => array('', 'string'),
		'Secret' => array('', 'string')
	);
	
	protected $aRequireModules = array(
		'ExternalServices'
	);
	
	public function init() 
	{
		$this->incClass('connector');
		$this->oApiSocialManager = $this->GetManager('social');
		$this->includeTemplate('BasicAuthClient_LoginView', 'Login-After', 'templates/button.html');
		$this->subscribeEvent('ExternalServicesAction', array($this, 'onExternalServicesAction'));
	}
	
	public function onExternalServicesAction($sService, &$mResult)
	{
		if ($sService === 'google')
		{
			$mResult = false;
			$oConnector = new CExternalServicesConnectorGoogle($this);
			if ($oConnector)
			{
				$mResult = $oConnector->Init();
			}
		}
	}
}
