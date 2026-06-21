import { Card, Label } from 'semantic-ui-react';
import TextLoop from 'react-text-loop';
import { FbRandomImage } from '../components';
import { localeCodeEn, localeCodeTr } from '../utils/i18n';

export function FbCardFarmers({ i18n }) {
  return (
    <div className='fb-card-farmers'>
      <Card fluid>
        <FbRandomImage keywords='farm' />
        {content[i18n._code]}
      </Card>
    </div>
  );
}

const content = {
  [localeCodeEn]: (
    <Card.Content>
      <Card.Header>Farmers &amp; Local Producers</Card.Header>
      <Card.Description>
        <div className='fb-desc-row'>
          🌾 buy direct from <Label as='span' color='green' size='small'>verified</Label> local growers
        </div>
        <div className='fb-desc-row'>
          <span>🌾 fresh&nbsp;</span>
          <TextLoop>
            <span><Label as='span' size='small' color='orange'>vegetables</Label></span>
            <span><Label as='span' size='small' color='yellow'>honey</Label></span>
            <span><Label as='span' size='small' color='brown'>bread</Label></span>
            <span><Label as='span' size='small' color='olive'>preserves</Label></span>
          </TextLoop>
          <span>, picked this week</span>
        </div>
        <div className='fb-desc-row'>
          🌾 weekly <Label as='span' color='teal' size='small'>subscription boxes</Label>, cancel any time
        </div>
        <div className='fb-desc-row'>
          🌾 no supermarket markup, <Label as='span' size='small' color='red'>support your neighbours</Label>
        </div>
      </Card.Description>
    </Card.Content>
  ),
  [localeCodeTr]: (
    <Card.Content>
      <Card.Header>Çiftçiler ve Yerel Üreticiler</Card.Header>
      <Card.Description>
        <div className='fb-desc-row'>
          🌾 <Label as='span' color='green' size='small'>doğrulanmış</Label> yerel üreticilerden doğrudan al
        </div>
        <div className='fb-desc-row'>
          <span>🌾 taze&nbsp;</span>
          <TextLoop>
            <span><Label as='span' size='small' color='orange'>sebze</Label></span>
            <span><Label as='span' size='small' color='yellow'>bal</Label></span>
            <span><Label as='span' size='small' color='brown'>ekmek</Label></span>
            <span><Label as='span' size='small' color='olive'>reçel</Label></span>
          </TextLoop>
          <span>, bu hafta toplandı</span>
        </div>
        <div className='fb-desc-row'>
          🌾 haftalık <Label as='span' color='teal' size='small'>kutu aboneliği</Label>, istediğin zaman iptal et
        </div>
        <div className='fb-desc-row'>
          🌾 market fiyatı yok, <Label as='span' size='small' color='red'>komşularını destekle</Label>
        </div>
      </Card.Description>
    </Card.Content>
  ),
};