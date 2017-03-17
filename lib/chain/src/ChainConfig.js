var _this;

var ecc_config = {
    address_prefix: "TST"
};

module.exports = _this = {
    core_asset: "TESTS",
    vest_asset: "VESTS",
    dollar_asset: "TBD",
    address_prefix: "TST",
    expire_in_secs: 15,
    expire_in_secs_proposal: 24 * 60 * 60,
    networks: {
        Steem: {
            core_asset: "TESTS",
            address_prefix: "TST",
            chain_id: "18dcf0a285365fc58b71f18b3d3fec954aa0c141c44e4e5cb4cf777b9eab274e"
        }
    },
    /** Set a few properties for known chain IDs. */
    setChainId: function(chain_id) {

        var i, len, network, network_name, ref;
        ref = Object.keys(_this.networks);

        for (i = 0, len = ref.length; i < len; i++) {

            network_name = ref[i];
            network = _this.networks[network_name];

            if (network.chain_id === chain_id) {

                _this.network_name = network_name;

                if (network.address_prefix) {
                    _this.address_prefix = network.address_prefix;
                    ecc_config.address_prefix = network.address_prefix;
                }

                // console.log("INFO    Configured for", network_name, ":", network.core_asset, "\n");

                return {
                    network_name: network_name,
                    network: network
                }
            }
        }

        if (!_this.network_name) {
            console.log("Unknown chain id (this may be a testnet)", chain_id);
        }

    },

    reset: function() {
        _this.core_asset = "TESTS";
        _this.address_prefix = "TST";
        ecc_config.address_prefix = "TST";
        _this.expire_in_secs = 15;
        _this.expire_in_secs_proposal = 24 * 60 * 60;

        console.log("Chain config reset");
    },

    setPrefix: function(prefix = "TST") {
        _this.address_prefix = prefix;
        ecc_config.address_prefix = prefix;
    }
}
