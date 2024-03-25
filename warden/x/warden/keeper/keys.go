package keeper

import (
	"cosmossdk.io/collections"
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"

	types "github.com/warden-protocol/wardenprotocol/warden/x/warden/types/v1beta2"
	v1beta2 "github.com/warden-protocol/wardenprotocol/warden/x/warden/types/v1beta2"
)

type KeysKeeper struct {
	keys        collections.Map[uint64, types.Key]
	keysBySpace collections.KeySet[collections.Pair[uint64, uint64]]
}

func NewKeysKeeper(sb *collections.SchemaBuilder, cdc codec.BinaryCodec) KeysKeeper {
	keys := collections.NewMap(sb, KeyPrefix, "keys", collections.Uint64Key, codec.CollValue[v1beta2.Key](cdc))
	keysBySpace := collections.NewKeySet(
		sb, KeysSpaceIndexPrefix, "keys_by_space",
		collections.PairKeyCodec(collections.Uint64Key, collections.Uint64Key),
	)
	return KeysKeeper{
		keys:        keys,
		keysBySpace: keysBySpace,
	}
}

func (k KeysKeeper) New(ctx sdk.Context, key types.Key, keyRequest types.KeyRequest) error {
	key.Id = keyRequest.Id
	return k.Set(ctx, key)
}

func (k KeysKeeper) Get(ctx sdk.Context, id uint64) (types.Key, error) {
	return k.keys.Get(ctx, id)
}

func (k KeysKeeper) Set(ctx sdk.Context, key types.Key) error {
	if err := k.keysBySpace.Set(ctx, collections.Join(key.SpaceId, key.Id)); err != nil {
		return err
	}
	return k.keys.Set(ctx, key.Id, key)
}

func (k KeysKeeper) Coll() collections.Map[uint64, v1beta2.Key] {
	return k.keys
}

func (k KeysKeeper) KeysBySpace() collections.KeySet[collections.Pair[uint64, uint64]] {
	return k.keysBySpace
}
