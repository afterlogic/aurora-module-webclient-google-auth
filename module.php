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
		$this->subscribeEvent('ExternalServicesAction', array($this, 'onExternalServicesAction'));
		$this->subscribeEvent('GetServices', array($this, 'onGetServices'));
	}
	
	/**
	 * Adds dropbox service name to array passed by reference.
	 * 
	 * @param array $aServices Array with services names passed by reference.
	 */
	public function onGetServices(&$aServices)
	{
		$aServices[] = 'google';
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
