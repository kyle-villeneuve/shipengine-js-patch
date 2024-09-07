// import { EventEmitter } from "../isomorphic.node";
import { get } from "../client";
import { NormalizedConfig } from "../config";
import { formatCarrier, formatResponse } from "./format-response";
import { Response } from "./types/private";
import * as ListCarriersTypes from "./types/public";

export { ListCarriersTypes };

/**
 * This function returns a list of all your connected carrier accounts,
 * along with helpful information about each account, its options, the services it offers, etc.
 *
 * https://www.shipengine.com/docs/reference/list-carriers/
 */
export async function listCarriers(
  config: NormalizedConfig
): Promise<ListCarriersTypes.Result> {
  const response = await get<Response.ListCarriersResponseBody>(
    "/v1/carriers",
    config
  );

  return formatResponse(response);
}

/**
 * This function returns a list of a carrier that matches the carrierId specified
 * along with helpful information about the account, its options, the services it offers, etc.
 *
 * https://www.shipengine.com/docs/reference/list-carriers/
 */
export async function listCarrier(
  carrierId: string,
  config: NormalizedConfig
): Promise<ListCarriersTypes.Carrier | null> {
  const response = await get<Response.Carrier>(
    `/v1/carriers/${carrierId}`,
    config
  );

  return response ? formatCarrier(response) : null;
}
