<?php
namespace App\Controller\Api\Admin;

use App\Controller\Api\AbstractApiCrudController;
use App\Entity;
use App\Http\Response;
use App\Http\ServerRequest;
use App\Utilities;
use Azura\Doctrine\Paginator;
use Psr\Http\Message\ResponseInterface;

abstract class AbstractAdminApiCrudController extends AbstractApiCrudController
{
    public function listAction(ServerRequest $request, Response $response): ResponseInterface
    {
        $query = $this->em->createQuery('SELECT e FROM ' . $this->entityClass . ' e');

        $paginator = new Paginator($query);
        $paginator->setFromRequest($request);

        $is_bootgrid = $paginator->isFromBootgrid();
        $router = $request->getRouter();

        $paginator->setPostprocessor(function($row) use ($is_bootgrid, $router) {
            $return = $this->_viewRecord($row, $router);

            if ($is_bootgrid) {
                return Utilities::flattenArray($return, '_');
            }

            return $return;
        });

        return $paginator->write($response);
    }

    /**
     * @param ServerRequest $request
     * @param Response $response
     * @return ResponseInterface
     * @throws \Azura\Exception
     */
    public function createAction(ServerRequest $request, Response $response): ResponseInterface
    {
        $row = $this->_createRecord($request->getParsedBody());

        $return = $this->_viewRecord($row, $request->getRouter());
        return $response->withJson($return);
    }

    /**
     * @param ServerRequest $request
     * @param Response $response
     * @param mixed $record_id
     * @return ResponseInterface
     */
    public function getAction(ServerRequest $request, Response $response, $record_id): ResponseInterface
    {
        $record = $this->_getRecord($record_id);

        $return = $this->_viewRecord($record, $request->getRouter());
        return $response->withJson($return);
    }

    /**
     * @param array $data
     * @return object
     */
    protected function _createRecord($data): object
    {
        return $this->_editRecord($data, null);
    }

    /**
     * @param ServerRequest $request
     * @param Response $response
     * @param mixed $record_id
     * @return ResponseInterface
     */
    public function editAction(ServerRequest $request, Response $response, $record_id): ResponseInterface
    {
        $record = $this->_getRecord($record_id);

        if (null === $record) {
            return $response->withStatus(404)
                ->withJson(new Entity\Api\Error(404, __('Record not found!')));
        }

        $this->_editRecord($request->getParsedBody(), $record);

        return $response->withJson(new Entity\Api\Status(true, __('Changes saved successfully.')));
    }

    /**
     * @param ServerRequest $request
     * @param Response $response
     * @param mixed $record_id
     * @return ResponseInterface
     */
    public function deleteAction(ServerRequest $request, Response $response, $record_id): ResponseInterface
    {
        $record = $this->_getRecord($record_id);

        if (null === $record) {
            return $response->withStatus(404)
                ->withJson(new Entity\Api\Error(404, __('Record not found!')));
        }

        $this->_deleteRecord($record);

        return $response->withJson(new Entity\Api\Status(true, __('Record deleted successfully.')));
    }

    /**
     * @param mixed $record_id
     * @return object|null
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     * @throws \Doctrine\ORM\TransactionRequiredException
     */
    protected function _getRecord($record_id)
    {
        return $this->em->find($this->entityClass, $record_id);
    }
}
