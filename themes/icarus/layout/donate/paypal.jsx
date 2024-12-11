/**
 * Paypal donation JSX component.
 * @module view/donate/paypal
 */
const { Component } = require('inferno');
// const { cacheComponent } = require('../../util/cache');
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');



/**
 * Paypal donation JSX component.
 *
 * @see https://www.paypal.com/donate/buttons
 * @example
 * <Paypal
 *     title="******"
 *     business="******"
 *     currencyCode="******" />
 */
class Paypal extends Component {
    render() {
        const { title, qrcode } = this.props;
        if (!qrcode) {
            return (
                <div class="notification is-danger">
                    You forgot to set the <code>qrcode</code> for Paypal.
                    Please set it in <code>_config.yml</code>.
                </div>
            );
        }
        return (
            <a class="button donate" data-type="paypal">
                <span class="icon is-small">
                    <i class="fab fa-paypal"></i>
                </span>
                <span>{title}</span>
                <span class="qrcode">
                    <img src={qrcode} alt={title}/>
                </span>
            </a>
        );
    }
}

/**
 * Cacheable Paypal donation JSX component.
 * <p>
 * This class is supposed to be used in combination with the <code>locals</code> hexo filter
 * ({@link module:hexo/filter/locals}).
 *
 * @see module:util/cache.cacheComponent
 * @example
 * <Paypal.Cacheable
 *     donate={{ type: 'paypal', business: '******' currency_code: '******' }}
 *     helper={{ __: function() {...} }} />
 */
Paypal.Cacheable = cacheComponent(Paypal, 'donate.paypal', (props) => {
    const { donate, helper } = props;

    return {
        qrcode: helper.url_for(donate.qrcode),
        title: helper.__('donate.' + donate.type),
    };
});

module.exports = Paypal;

